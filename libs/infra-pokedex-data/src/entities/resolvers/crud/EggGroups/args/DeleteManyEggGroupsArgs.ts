import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupsWhereInput } from "../../../inputs/EggGroupsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEggGroupsArgs {
  @TypeGraphQL.Field(_type => EggGroupsWhereInput, {
    nullable: true
  })
  where?: EggGroupsWhereInput | undefined;
}
