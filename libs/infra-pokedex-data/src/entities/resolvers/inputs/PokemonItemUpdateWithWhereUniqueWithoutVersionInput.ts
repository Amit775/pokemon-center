import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemUpdateWithoutVersionInput } from "../inputs/PokemonItemUpdateWithoutVersionInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemUpdateWithWhereUniqueWithoutVersionInput", {})
export class PokemonItemUpdateWithWhereUniqueWithoutVersionInput {
  @TypeGraphQL.Field(_type => PokemonItemWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemUpdateWithoutVersionInput, {
    nullable: false
  })
  data!: PokemonItemUpdateWithoutVersionInput;
}
