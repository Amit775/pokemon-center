import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateWithoutVersionGroupInput } from "../inputs/PokemonFormsCreateWithoutVersionGroupInput";
import { PokemonFormsUpdateWithoutVersionGroupInput } from "../inputs/PokemonFormsUpdateWithoutVersionGroupInput";
import { PokemonFormsWhereUniqueInput } from "../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormsUpsertWithWhereUniqueWithoutVersionGroupInput", {})
export class PokemonFormsUpsertWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonFormsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  update!: PokemonFormsUpdateWithoutVersionGroupInput;

  @TypeGraphQL.Field(_type => PokemonFormsCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: PokemonFormsCreateWithoutVersionGroupInput;
}
