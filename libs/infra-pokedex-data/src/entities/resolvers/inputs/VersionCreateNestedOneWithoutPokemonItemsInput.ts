import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateOrConnectWithoutPokemonItemsInput } from "../inputs/VersionCreateOrConnectWithoutPokemonItemsInput";
import { VersionCreateWithoutPokemonItemsInput } from "../inputs/VersionCreateWithoutPokemonItemsInput";
import { VersionWhereUniqueInput } from "../inputs/VersionWhereUniqueInput";

@TypeGraphQL.InputType("VersionCreateNestedOneWithoutPokemonItemsInput", {})
export class VersionCreateNestedOneWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => VersionCreateWithoutPokemonItemsInput, {
    nullable: true
  })
  create?: VersionCreateWithoutPokemonItemsInput | undefined;

  @TypeGraphQL.Field(_type => VersionCreateOrConnectWithoutPokemonItemsInput, {
    nullable: true
  })
  connectOrCreate?: VersionCreateOrConnectWithoutPokemonItemsInput | undefined;

  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionWhereUniqueInput | undefined;
}
