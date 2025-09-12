import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsScalarWhereInput } from "../inputs/PokemonFormsScalarWhereInput";
import { PokemonFormsUpdateManyMutationInput } from "../inputs/PokemonFormsUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonFormsUpdateManyWithWhereWithoutVersionGroupInput", {})
export class PokemonFormsUpdateManyWithWhereWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonFormsScalarWhereInput, {
    nullable: false
  })
  where!: PokemonFormsScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonFormsUpdateManyMutationInput;
}
