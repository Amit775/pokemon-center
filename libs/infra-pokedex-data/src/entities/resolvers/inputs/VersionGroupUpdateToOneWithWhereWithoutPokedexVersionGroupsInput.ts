import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupUpdateWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupUpdateWithoutPokedexVersionGroupsInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpdateToOneWithWhereWithoutPokedexVersionGroupsInput", {})
export class VersionGroupUpdateToOneWithWhereWithoutPokedexVersionGroupsInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutPokedexVersionGroupsInput, {
    nullable: false
  })
  data!: VersionGroupUpdateWithoutPokedexVersionGroupsInput;
}
