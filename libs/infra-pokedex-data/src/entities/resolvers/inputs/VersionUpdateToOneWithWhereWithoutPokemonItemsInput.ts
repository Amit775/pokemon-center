import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionUpdateWithoutPokemonItemsInput } from "../inputs/VersionUpdateWithoutPokemonItemsInput";
import { VersionWhereInput } from "../inputs/VersionWhereInput";

@TypeGraphQL.InputType("VersionUpdateToOneWithWhereWithoutPokemonItemsInput", {})
export class VersionUpdateToOneWithWhereWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  where?: VersionWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionUpdateWithoutPokemonItemsInput, {
    nullable: false
  })
  data!: VersionUpdateWithoutPokemonItemsInput;
}
