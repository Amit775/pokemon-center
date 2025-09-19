import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemCreateWithoutVersionInput } from "../inputs/PokemonItemCreateWithoutVersionInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemCreateOrConnectWithoutVersionInput", {})
export class PokemonItemCreateOrConnectWithoutVersionInput {
  @TypeGraphQL.Field(_type => PokemonItemWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemCreateWithoutVersionInput, {
    nullable: false
  })
  create!: PokemonItemCreateWithoutVersionInput;
}
