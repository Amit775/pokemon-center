import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndexUpdateInput } from "../../../inputs/TypeGameIndexUpdateInput";
import { TypeGameIndexWhereUniqueInput } from "../../../inputs/TypeGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTypeGameIndexArgs {
  @TypeGraphQL.Field(_type => TypeGameIndexUpdateInput, {
    nullable: false
  })
  data!: TypeGameIndexUpdateInput;

  @TypeGraphQL.Field(_type => TypeGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndexWhereUniqueInput;
}
