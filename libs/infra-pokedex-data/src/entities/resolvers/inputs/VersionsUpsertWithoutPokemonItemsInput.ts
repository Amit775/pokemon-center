import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateWithoutPokemonItemsInput } from "../inputs/VersionsCreateWithoutPokemonItemsInput";
import { VersionsUpdateWithoutPokemonItemsInput } from "../inputs/VersionsUpdateWithoutPokemonItemsInput";
import { VersionsWhereInput } from "../inputs/VersionsWhereInput";

@TypeGraphQL.InputType("VersionsUpsertWithoutPokemonItemsInput", {})
export class VersionsUpsertWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => VersionsUpdateWithoutPokemonItemsInput, {
    nullable: false
  })
  update!: VersionsUpdateWithoutPokemonItemsInput;

  @TypeGraphQL.Field(_type => VersionsCreateWithoutPokemonItemsInput, {
    nullable: false
  })
  create!: VersionsCreateWithoutPokemonItemsInput;

  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  where?: VersionsWhereInput | undefined;
}
