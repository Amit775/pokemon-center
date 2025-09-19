import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemCreateWithoutVersionInput } from "../inputs/PokemonItemCreateWithoutVersionInput";
import { PokemonItemUpdateWithoutVersionInput } from "../inputs/PokemonItemUpdateWithoutVersionInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemUpsertWithWhereUniqueWithoutVersionInput", {})
export class PokemonItemUpsertWithWhereUniqueWithoutVersionInput {
  @TypeGraphQL.Field(_type => PokemonItemWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemUpdateWithoutVersionInput, {
    nullable: false
  })
  update!: PokemonItemUpdateWithoutVersionInput;

  @TypeGraphQL.Field(_type => PokemonItemCreateWithoutVersionInput, {
    nullable: false
  })
  create!: PokemonItemCreateWithoutVersionInput;
}
