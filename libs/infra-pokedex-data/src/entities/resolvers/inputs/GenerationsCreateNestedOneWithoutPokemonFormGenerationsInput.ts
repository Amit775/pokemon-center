import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput } from "../inputs/GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput";
import { GenerationsCreateWithoutPokemonFormGenerationsInput } from "../inputs/GenerationsCreateWithoutPokemonFormGenerationsInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput", {})
export class GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutPokemonFormGenerationsInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutPokemonFormGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;
}
