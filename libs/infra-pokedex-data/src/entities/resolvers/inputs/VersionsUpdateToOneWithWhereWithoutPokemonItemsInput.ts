import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsUpdateWithoutPokemonItemsInput } from "../inputs/VersionsUpdateWithoutPokemonItemsInput";
import { VersionsWhereInput } from "../inputs/VersionsWhereInput";

@TypeGraphQL.InputType("VersionsUpdateToOneWithWhereWithoutPokemonItemsInput", {})
export class VersionsUpdateToOneWithWhereWithoutPokemonItemsInput {
  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  where?: VersionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateWithoutPokemonItemsInput, {
    nullable: false
  })
  data!: VersionsUpdateWithoutPokemonItemsInput;
}
