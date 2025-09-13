import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsUpdateWithoutVersionGroupInput } from "../inputs/PokemonFormsUpdateWithoutVersionGroupInput";
import { PokemonFormsWhereUniqueInput } from "../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormsUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class PokemonFormsUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonFormsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: PokemonFormsUpdateWithoutVersionGroupInput;
}
