import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateOrConnectWithoutPokemonItemsInput } from "../inputs/VersionsCreateOrConnectWithoutPokemonItemsInput";
import { VersionsCreateWithoutPokemonItemsInput } from "../inputs/VersionsCreateWithoutPokemonItemsInput";
import { VersionsWhereUniqueInput } from "../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionsCreateNestedOneWithoutPokemonItemsInput", {})
export class VersionsCreateNestedOneWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => VersionsCreateWithoutPokemonItemsInput, {
    nullable: true
  })
  create?: VersionsCreateWithoutPokemonItemsInput | undefined;

  @TypeGraphQL.Field(_type => VersionsCreateOrConnectWithoutPokemonItemsInput, {
    nullable: true
  })
  connectOrCreate?: VersionsCreateOrConnectWithoutPokemonItemsInput | undefined;

  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionsWhereUniqueInput | undefined;
}
