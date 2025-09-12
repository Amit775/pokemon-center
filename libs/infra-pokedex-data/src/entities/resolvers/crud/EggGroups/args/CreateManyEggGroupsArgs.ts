import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupsCreateManyInput } from "../../../inputs/EggGroupsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEggGroupsArgs {
  @TypeGraphQL.Field(_type => [EggGroupsCreateManyInput], {
    nullable: false
  })
  data!: EggGroupsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
