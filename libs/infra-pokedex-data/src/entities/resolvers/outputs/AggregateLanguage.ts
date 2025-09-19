import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageAvgAggregate } from "../outputs/LanguageAvgAggregate";
import { LanguageCountAggregate } from "../outputs/LanguageCountAggregate";
import { LanguageMaxAggregate } from "../outputs/LanguageMaxAggregate";
import { LanguageMinAggregate } from "../outputs/LanguageMinAggregate";
import { LanguageSumAggregate } from "../outputs/LanguageSumAggregate";

@TypeGraphQL.ObjectType("AggregateLanguage", {})
export class AggregateLanguage {
  @TypeGraphQL.Field(_type => LanguageCountAggregate, {
    nullable: true
  })
  _count!: LanguageCountAggregate | null;

  @TypeGraphQL.Field(_type => LanguageAvgAggregate, {
    nullable: true
  })
  _avg!: LanguageAvgAggregate | null;

  @TypeGraphQL.Field(_type => LanguageSumAggregate, {
    nullable: true
  })
  _sum!: LanguageSumAggregate | null;

  @TypeGraphQL.Field(_type => LanguageMinAggregate, {
    nullable: true
  })
  _min!: LanguageMinAggregate | null;

  @TypeGraphQL.Field(_type => LanguageMaxAggregate, {
    nullable: true
  })
  _max!: LanguageMaxAggregate | null;
}
