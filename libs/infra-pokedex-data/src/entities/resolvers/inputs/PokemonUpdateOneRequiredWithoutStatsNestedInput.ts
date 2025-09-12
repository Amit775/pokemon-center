import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutStatsInput } from "../inputs/PokemonCreateOrConnectWithoutStatsInput";
import { PokemonCreateWithoutStatsInput } from "../inputs/PokemonCreateWithoutStatsInput";
import { PokemonUpdateToOneWithWhereWithoutStatsInput } from "../inputs/PokemonUpdateToOneWithWhereWithoutStatsInput";
import { PokemonUpsertWithoutStatsInput } from "../inputs/PokemonUpsertWithoutStatsInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonUpdateOneRequiredWithoutStatsNestedInput", {})
export class PokemonUpdateOneRequiredWithoutStatsNestedInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutStatsInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutStatsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpsertWithoutStatsInput, {
    nullable: true
  })
  upsert?: PokemonUpsertWithoutStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateToOneWithWhereWithoutStatsInput, {
    nullable: true
  })
  update?: PokemonUpdateToOneWithWhereWithoutStatsInput | undefined;
}
