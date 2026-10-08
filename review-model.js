(function (root) {
  "use strict";

  const LABELS = { marathonpace: "Marathonpace Review", endurance: "Endurance Review", confidence: "Confidence Review", race: "Marathon Race Review" };

  function amsterdamDate(date = new Date()) {
    const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Amsterdam", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(date);
    const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
    return `${values.year}-${values.month}-${values.day}`;
  }

  function definitions(plan) {
    const reviews = [];
    for (const week of plan.weeks) {
      for (const workout of week.workouts) {
        let reviewType;
        if (week.weekNumber >= 42 && week.weekNumber <= 46) {
          if (workout.trainingNumber === 2) reviewType = "marathonpace";
          else if (workout.role === "long") reviewType = workout.confidence ? "confidence" : "endurance";
        } else if (week.weekNumber === 47 && workout.activityType === "race") reviewType = "race";
        if (!reviewType) continue;
        reviews.push({ reviewId: `garmin-review:${workout.workoutId}`, trainingId: workout.workoutId, reviewType, label: LABELS[reviewType], plannedDate: workout.preferredDate, weekNumber: week.weekNumber, weekEndDate: week.endDate, optional: week.weekNumber === 46, required: week.weekNumber !== 46 });
      }
    }
    return reviews.sort((a, b) => a.plannedDate.localeCompare(b.plannedDate));
  }

  function resolve(definition, records = {}, completed = {}, today = amsterdamDate()) {
    const record = records[definition.reviewId] || {};
    const performed = Boolean(completed[definition.trainingId]);
    const shared = record.status === "shared";
    const skipped = record.status === "skipped";
    const upcoming = !performed && definition.plannedDate > today;
    return { ...definition, record, performed, shared, skipped, upcoming, overdue: definition.required && !shared && !skipped && definition.weekEndDate < today,
      statusLabel: shared ? "Gedeeld" : skipped ? "Overgeslagen" : upcoming ? "Aankomend" : performed ? "Klaar om te delen" : "Nog niet gedeeld" };
  }

  function progress(reviews) {
    return { total: reviews.length, shared: reviews.filter(r => r.shared).length, skipped: reviews.filter(r => r.skipped).length, open: reviews.filter(r => !r.shared && !r.skipped).length };
  }

  function reviewText(review, workout, plan, record = {}) {
    const date = new Intl.DateTimeFormat("nl-NL", { timeZone: "UTC", day: "numeric", month: "long", year: "numeric" }).format(new Date(`${review.plannedDate}T12:00:00Z`));
    const goals = review.reviewType === "marathonpace"
      ? "Vergelijk werkelijke tempo's en hartslag per MP-blok, hartslagverloop, cadans, controle en inspanning met mijn eerdere trainingen."
      : review.reviewType === "race" ? "Beoordeel pacing, hartslagverloop, cadans, continuiteit, voeding en het laatste deel van de marathon."
        : "Beoordeel tempoverloop, hartslagverloop en eventuele drift, cadans, continuiteit en het laatste halfuur. Vergelijk met mijn eerdere lange duurlopen.";
    const parts = [`Analyseer mijn Garmin FIT-bestand voor ${review.label}: ${workout.title}, gepland op ${date} (${workout.totalPlannedLabel}).`, `Geplande opbouw: ${workout.garmin.programSummary}.`, workout.plannedMpMinutes ? `MP: ${workout.plannedMpMinutes} minuten op richttempo ${plan.config.targetPace}; Garmin-range ${plan.config.mpTarget}.` : review.reviewType === "race" ? `Marathon: ${plan.config.raceDistanceKm} km tot de officiele finish; richttempo ${plan.config.targetPace}.` : "Easy is op gevoel; de schattingspace is geen verplicht trainingsdoel.", goals,
      `Beoordeel mijn ontwikkeling richting de marathon van 22 november 2026 met A-doel ${plan.config.targetTime}. Maak onderscheid tussen wat de data bewijzen en wat onzeker blijft. De planstappen zijn niet automatisch werkelijk uitgevoerde stappen; gebruik de datum en uitvoering uit het FIT-bestand. Vraag naar eerdere bestanden als ze niet beschikbaar zijn.`];
    if (["endurance", "confidence", "race"].includes(review.reviewType)) parts.push("Neem mijn opgegeven voeding, vochtinname, RPE en herstelervaring mee. Ontbrekende ervaringen niet invullen of afleiden als feiten.");
    for (const [field, label] of [["rpe", "RPE (1-10)"], ["legs", "Beengevoel"], ["notes", "Bijzonderheden"], ["fueling", "Voeding"], ["fluids", "Vochtinname"], ["recovery", "Herstel volgende dag"]]) {
      if (record[field] != null && String(record[field]).trim()) parts.push(`${label}: ${record[field]}`);
    }
    parts.push("Gedeeld is uitsluitend mijn handmatige registratie, geen bewijs van automatische ontvangst of analyse.");
    return parts.join("\n\n");
  }

  root.MARATHON_REVIEWS = { definitions, resolve, progress, reviewText, amsterdamDate };
})(typeof window !== "undefined" ? window : globalThis);
