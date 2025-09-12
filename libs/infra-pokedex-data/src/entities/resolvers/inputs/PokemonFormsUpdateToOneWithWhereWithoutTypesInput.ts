import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsUpdateWithoutTypesInput } from "../inputs/PokemonFormsUpdateWithoutTypesInput";
import { PokemonFormsWhereInput } from "../inputs/PokemonFormsWhereInput";

@TypeGraphQL.InputType("PokemonFormsUpdateToOneWithWhereWithoutTypesInput", {})
export class PokemonFormsUpdateToOneWithWhereWithoutTypesInput {
  @TypeGraphQL.Field(_type => PokemonFormsWhereInput, {
    nullable: true
  })
  where?: PokemonFormsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateWithoutTypesInput, {
    nullable: false
  })
  data!: PokemonFormsUpdateWithoutTypesInput;
}
