import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguagesAvgAggregate } from "../outputs/LanguagesAvgAggregate";
import { LanguagesCountAggregate } from "../outputs/LanguagesCountAggregate";
import { LanguagesMaxAggregate } from "../outputs/LanguagesMaxAggregate";
import { LanguagesMinAggregate } from "../outputs/LanguagesMinAggregate";
import { LanguagesSumAggregate } from "../outputs/LanguagesSumAggregate";

@TypeGraphQL.ObjectType("LanguagesGroupBy", {})
export class LanguagesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  iso639!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  iso3166!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  official!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  @TypeGraphQL.Field(_type => LanguagesCountAggregate, {
    nullable: true
  })
  _count!: LanguagesCountAggregate | null;

  @TypeGraphQL.Field(_type => LanguagesAvgAggregate, {
    nullable: true
  })
  _avg!: LanguagesAvgAggregate | null;

  @TypeGraphQL.Field(_type => LanguagesSumAggregate, {
    nullable: true
  })
  _sum!: LanguagesSumAggregate | null;

  @TypeGraphQL.Field(_type => LanguagesMinAggregate, {
    nullable: true
  })
  _min!: LanguagesMinAggregate | null;

  @TypeGraphQL.Field(_type => LanguagesMaxAggregate, {
    nullable: true
  })
  _max!: LanguagesMaxAggregate | null;
}
