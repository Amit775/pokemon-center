import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutAbilitiesInput } from "../inputs/PokemonCreateWithoutAbilitiesInput";
import { PokemonUpdateWithoutAbilitiesInput } from "../inputs/PokemonUpdateWithoutAbilitiesInput";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonUpsertWithoutAbilitiesInput", {})
export class PokemonUpsertWithoutAbilitiesInput {
  @TypeGraphQL.Field(_type => PokemonUpdateWithoutAbilitiesInput, {
    nullable: false
  })
  update!: PokemonUpdateWithoutAbilitiesInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutAbilitiesInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutAbilitiesInput;

  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;
}
