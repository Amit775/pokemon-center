import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndexWhereInput } from "../../inputs/TypeGameIndexWhereInput";

@TypeGraphQL.ArgsType()
export class TypeCountGameIndicesArgs {
  @TypeGraphQL.Field(_type => TypeGameIndexWhereInput, {
    nullable: true
  })
  where?: TypeGameIndexWhereInput | undefined;
}
