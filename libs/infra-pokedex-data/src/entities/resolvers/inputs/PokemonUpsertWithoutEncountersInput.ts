import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutEncountersInput } from "../inputs/PokemonCreateWithoutEncountersInput";
import { PokemonUpdateWithoutEncountersInput } from "../inputs/PokemonUpdateWithoutEncountersInput";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonUpsertWithoutEncountersInput", {})
export class PokemonUpsertWithoutEncountersInput {
  @TypeGraphQL.Field(_type => PokemonUpdateWithoutEncountersInput, {
    nullable: false
  })
  update!: PokemonUpdateWithoutEncountersInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutEncountersInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutEncountersInput;

  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;
}
