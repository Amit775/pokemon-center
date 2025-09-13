import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupsCreateWithoutPokedexVersionGroupsInput";
import { VersionGroupsUpdateWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupsUpdateWithoutPokedexVersionGroupsInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpsertWithoutPokedexVersionGroupsInput", {})
export class VersionGroupsUpsertWithoutPokedexVersionGroupsInput {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutPokedexVersionGroupsInput, {
    nullable: false
  })
  update!: VersionGroupsUpdateWithoutPokedexVersionGroupsInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutPokedexVersionGroupsInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutPokedexVersionGroupsInput;

  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;
}
