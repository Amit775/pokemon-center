import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateWithoutPokemonItemsInput } from "../inputs/VersionCreateWithoutPokemonItemsInput";
import { VersionUpdateWithoutPokemonItemsInput } from "../inputs/VersionUpdateWithoutPokemonItemsInput";
import { VersionWhereInput } from "../inputs/VersionWhereInput";

@TypeGraphQL.InputType("VersionUpsertWithoutPokemonItemsInput", {})
export class VersionUpsertWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => VersionUpdateWithoutPokemonItemsInput, {
    nullable: false
  })
  update!: VersionUpdateWithoutPokemonItemsInput;

  @TypeGraphQL.Field(_type => VersionCreateWithoutPokemonItemsInput, {
    nullable: false
  })
  create!: VersionCreateWithoutPokemonItemsInput;

  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  where?: VersionWhereInput | undefined;
}
