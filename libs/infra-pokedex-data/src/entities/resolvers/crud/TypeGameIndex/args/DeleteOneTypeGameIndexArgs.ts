import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndexWhereUniqueInput } from "../../../inputs/TypeGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneTypeGameIndexArgs {
  @TypeGraphQL.Field(_type => TypeGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndexWhereUniqueInput;
}
