import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndicesCreateInput } from "../../../inputs/TypeGameIndicesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTypeGameIndicesArgs {
  @TypeGraphQL.Field(_type => TypeGameIndicesCreateInput, {
    nullable: false
  })
  data!: TypeGameIndicesCreateInput;
}
