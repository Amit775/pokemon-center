import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutEncountersInput } from "../inputs/PokemonCreateOrConnectWithoutEncountersInput";
import { PokemonCreateWithoutEncountersInput } from "../inputs/PokemonCreateWithoutEncountersInput";
import { PokemonUpdateToOneWithWhereWithoutEncountersInput } from "../inputs/PokemonUpdateToOneWithWhereWithoutEncountersInput";
import { PokemonUpsertWithoutEncountersInput } from "../inputs/PokemonUpsertWithoutEncountersInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonUpdateOneRequiredWithoutEncountersNestedInput", {})
export class PokemonUpdateOneRequiredWithoutEncountersNestedInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutEncountersInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutEncountersInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpsertWithoutEncountersInput, {
    nullable: true
  })
  upsert?: PokemonUpsertWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateToOneWithWhereWithoutEncountersInput, {
    nullable: true
  })
  update?: PokemonUpdateToOneWithWhereWithoutEncountersInput | undefined;
}
