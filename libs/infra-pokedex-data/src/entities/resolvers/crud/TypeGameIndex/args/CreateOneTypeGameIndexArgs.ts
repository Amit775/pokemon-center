import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndexCreateInput } from "../../../inputs/TypeGameIndexCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTypeGameIndexArgs {
  @TypeGraphQL.Field(_type => TypeGameIndexCreateInput, {
    nullable: false
  })
  data!: TypeGameIndexCreateInput;
}
