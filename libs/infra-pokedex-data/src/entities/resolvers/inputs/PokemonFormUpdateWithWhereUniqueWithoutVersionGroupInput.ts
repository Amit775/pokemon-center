import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormUpdateWithoutVersionGroupInput } from "../inputs/PokemonFormUpdateWithoutVersionGroupInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class PokemonFormUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: PokemonFormUpdateWithoutVersionGroupInput;
}
