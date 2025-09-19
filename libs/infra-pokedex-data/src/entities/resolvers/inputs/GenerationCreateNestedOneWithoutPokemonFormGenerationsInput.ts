import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateOrConnectWithoutPokemonFormGenerationsInput } from "../inputs/GenerationCreateOrConnectWithoutPokemonFormGenerationsInput";
import { GenerationCreateWithoutPokemonFormGenerationsInput } from "../inputs/GenerationCreateWithoutPokemonFormGenerationsInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateNestedOneWithoutPokemonFormGenerationsInput", {})
export class GenerationCreateNestedOneWithoutPokemonFormGenerationsInput {
  @TypeGraphQL.Field(_type => GenerationCreateWithoutPokemonFormGenerationsInput, {
    nullable: true
  })
  create?: GenerationCreateWithoutPokemonFormGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateOrConnectWithoutPokemonFormGenerationsInput, {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutPokemonFormGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput | undefined;
}
