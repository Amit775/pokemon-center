import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndexCreateInput } from "../../../inputs/TypeGameIndexCreateInput";
import { TypeGameIndexUpdateInput } from "../../../inputs/TypeGameIndexUpdateInput";
import { TypeGameIndexWhereUniqueInput } from "../../../inputs/TypeGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTypeGameIndexArgs {
  @TypeGraphQL.Field(_type => TypeGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeGameIndexCreateInput, {
    nullable: false
  })
  create!: TypeGameIndexCreateInput;

  @TypeGraphQL.Field(_type => TypeGameIndexUpdateInput, {
    nullable: false
  })
  update!: TypeGameIndexUpdateInput;
}
