import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsUpdateWithoutPokedexVersionGroupsInput } from "../inputs/VersionGroupsUpdateWithoutPokedexVersionGroupsInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput", {})
export class VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutPokedexVersionGroupsInput, {
    nullable: false
  })
  data!: VersionGroupsUpdateWithoutPokedexVersionGroupsInput;
}
