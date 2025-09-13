import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateWithoutTypesInput } from "../inputs/PokemonFormsCreateWithoutTypesInput";
import { PokemonFormsUpdateWithoutTypesInput } from "../inputs/PokemonFormsUpdateWithoutTypesInput";
import { PokemonFormsWhereInput } from "../inputs/PokemonFormsWhereInput";

@TypeGraphQL.InputType("PokemonFormsUpsertWithoutTypesInput", {})
export class PokemonFormsUpsertWithoutTypesInput {
  @TypeGraphQL.Field(_type => PokemonFormsUpdateWithoutTypesInput, {
    nullable: false
  })
  update!: PokemonFormsUpdateWithoutTypesInput;

  @TypeGraphQL.Field(_type => PokemonFormsCreateWithoutTypesInput, {
    nullable: false
  })
  create!: PokemonFormsCreateWithoutTypesInput;

  @TypeGraphQL.Field(_type => PokemonFormsWhereInput, {
    nullable: true
  })
  where?: PokemonFormsWhereInput | undefined;
}
