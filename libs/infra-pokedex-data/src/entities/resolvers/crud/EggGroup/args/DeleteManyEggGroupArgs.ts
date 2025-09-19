import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EggGroupWhereInput } from "../../../inputs/EggGroupWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEggGroupArgs {
  @TypeGraphQL.Field(_type => EggGroupWhereInput, {
    nullable: true
  })
  where?: EggGroupWhereInput | undefined;
}
