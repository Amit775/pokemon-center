import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateWithoutGenerationsInput } from "../inputs/PokemonFormsCreateWithoutGenerationsInput";
import { PokemonFormsWhereUniqueInput } from "../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormsCreateOrConnectWithoutGenerationsInput", {})
export class PokemonFormsCreateOrConnectWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => PokemonFormsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormsCreateWithoutGenerationsInput, {
    nullable: false
  })
  create!: PokemonFormsCreateWithoutGenerationsInput;
}
