import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateOrConnectWithoutGenerationsInput } from "../inputs/PokemonFormsCreateOrConnectWithoutGenerationsInput";
import { PokemonFormsCreateWithoutGenerationsInput } from "../inputs/PokemonFormsCreateWithoutGenerationsInput";
import { PokemonFormsWhereUniqueInput } from "../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormsCreateNestedOneWithoutGenerationsInput", {})
export class PokemonFormsCreateNestedOneWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => PokemonFormsCreateWithoutGenerationsInput, {
    nullable: true
  })
  create?: PokemonFormsCreateWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsCreateOrConnectWithoutGenerationsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonFormsCreateOrConnectWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonFormsWhereUniqueInput | undefined;
}
