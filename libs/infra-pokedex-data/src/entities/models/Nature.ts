import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { NatureBattleStylePreference } from "../models/NatureBattleStylePreference";
import { Stat } from "../models/Stat";
import { Type } from "../models/Type";
import { NatureCount } from "../resolvers/outputs/NatureCount";

@TypeGraphQL.ObjectType("Nature", {})
export class Nature {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  decreased_stat_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  increased_stat_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hates_flavor_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  likes_flavor_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  decreasedStat?: Stat;

  increasedStat?: Stat;

  battleStylePreferences?: NatureBattleStylePreference[];

  decreasedStatTypes?: Type[];

  increasedStatTypes?: Type[];

  @TypeGraphQL.Field(_type => NatureCount, {
    nullable: true
  })
  _count?: NatureCount | null;
}
