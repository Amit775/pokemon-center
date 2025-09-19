import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateOrConnectWithoutPokemonStatsInput } from "../inputs/StatCreateOrConnectWithoutPokemonStatsInput";
import { StatCreateWithoutPokemonStatsInput } from "../inputs/StatCreateWithoutPokemonStatsInput";
import { StatUpdateToOneWithWhereWithoutPokemonStatsInput } from "../inputs/StatUpdateToOneWithWhereWithoutPokemonStatsInput";
import { StatUpsertWithoutPokemonStatsInput } from "../inputs/StatUpsertWithoutPokemonStatsInput";
import { StatWhereUniqueInput } from "../inputs/StatWhereUniqueInput";

@TypeGraphQL.InputType("StatUpdateOneRequiredWithoutPokemonStatsNestedInput", {})
export class StatUpdateOneRequiredWithoutPokemonStatsNestedInput {
  @TypeGraphQL.Field(_type => StatCreateWithoutPokemonStatsInput, {
    nullable: true
  })
  create?: StatCreateWithoutPokemonStatsInput | undefined;

  @TypeGraphQL.Field(_type => StatCreateOrConnectWithoutPokemonStatsInput, {
    nullable: true
  })
  connectOrCreate?: StatCreateOrConnectWithoutPokemonStatsInput | undefined;

  @TypeGraphQL.Field(_type => StatUpsertWithoutPokemonStatsInput, {
    nullable: true
  })
  upsert?: StatUpsertWithoutPokemonStatsInput | undefined;

  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: true
  })
  connect?: StatWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StatUpdateToOneWithWhereWithoutPokemonStatsInput, {
    nullable: true
  })
  update?: StatUpdateToOneWithWhereWithoutPokemonStatsInput | undefined;
}
