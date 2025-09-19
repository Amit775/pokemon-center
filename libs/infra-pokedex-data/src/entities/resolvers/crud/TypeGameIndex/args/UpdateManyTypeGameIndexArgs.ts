import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndexUpdateManyMutationInput } from "../../../inputs/TypeGameIndexUpdateManyMutationInput";
import { TypeGameIndexWhereInput } from "../../../inputs/TypeGameIndexWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTypeGameIndexArgs {
  @TypeGraphQL.Field(_type => TypeGameIndexUpdateManyMutationInput, {
    nullable: false
  })
  data!: TypeGameIndexUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TypeGameIndexWhereInput, {
    nullable: true
  })
  where?: TypeGameIndexWhereInput | undefined;
}
