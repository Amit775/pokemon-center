import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupCreateWithoutPokedexVersionGroupsInput";
import { VersionGroupUpdateWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupUpdateWithoutPokedexVersionGroupsInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpsertWithoutPokedexVersionGroupsInput", {})
export class VersionGroupUpsertWithoutPokedexVersionGroupsInput {
  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutPokedexVersionGroupsInput, {
    nullable: false
  })
  update!: VersionGroupUpdateWithoutPokedexVersionGroupsInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutPokedexVersionGroupsInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutPokedexVersionGroupsInput;

  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;
}
