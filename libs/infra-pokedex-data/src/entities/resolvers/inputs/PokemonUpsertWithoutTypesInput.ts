import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutTypesInput } from "../inputs/PokemonCreateWithoutTypesInput";
import { PokemonUpdateWithoutTypesInput } from "../inputs/PokemonUpdateWithoutTypesInput";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonUpsertWithoutTypesInput", {})
export class PokemonUpsertWithoutTypesInput {
  @TypeGraphQL.Field(_type => PokemonUpdateWithoutTypesInput, {
    nullable: false
  })
  update!: PokemonUpdateWithoutTypesInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutTypesInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutTypesInput;

  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;
}
