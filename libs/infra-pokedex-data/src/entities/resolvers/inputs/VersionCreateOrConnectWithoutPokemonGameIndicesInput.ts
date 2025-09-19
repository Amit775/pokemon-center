import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateWithoutPokemonGameIndicesInput } from "../inputs/VersionCreateWithoutPokemonGameIndicesInput";
import { VersionWhereUniqueInput } from "../inputs/VersionWhereUniqueInput";

@TypeGraphQL.InputType("VersionCreateOrConnectWithoutPokemonGameIndicesInput", {})
export class VersionCreateOrConnectWithoutPokemonGameIndicesInput {
  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionCreateWithoutPokemonGameIndicesInput, {
    nullable: false
  })
  create!: VersionCreateWithoutPokemonGameIndicesInput;
}
