import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateWithoutVersionGroupInput } from "../inputs/PokemonFormCreateWithoutVersionGroupInput";
import { PokemonFormUpdateWithoutVersionGroupInput } from "../inputs/PokemonFormUpdateWithoutVersionGroupInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormUpsertWithWhereUniqueWithoutVersionGroupInput", {})
export class PokemonFormUpsertWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  update!: PokemonFormUpdateWithoutVersionGroupInput;

  @TypeGraphQL.Field(_type => PokemonFormCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: PokemonFormCreateWithoutVersionGroupInput;
}
