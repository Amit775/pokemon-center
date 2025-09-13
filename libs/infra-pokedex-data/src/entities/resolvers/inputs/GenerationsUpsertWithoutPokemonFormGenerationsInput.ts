import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutPokemonFormGenerationsInput } from "../inputs/GenerationsCreateWithoutPokemonFormGenerationsInput";
import { GenerationsUpdateWithoutPokemonFormGenerationsInput } from "../inputs/GenerationsUpdateWithoutPokemonFormGenerationsInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpsertWithoutPokemonFormGenerationsInput", {})
export class GenerationsUpsertWithoutPokemonFormGenerationsInput {
  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutPokemonFormGenerationsInput, {
    nullable: false
  })
  update!: GenerationsUpdateWithoutPokemonFormGenerationsInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutPokemonFormGenerationsInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutPokemonFormGenerationsInput;

  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;
}
