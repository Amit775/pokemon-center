import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatUpdateManyMutationInput } from "../../../inputs/StatUpdateManyMutationInput";
import { StatWhereInput } from "../../../inputs/StatWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStatArgs {
  @TypeGraphQL.Field(_type => StatUpdateManyMutationInput, {
    nullable: false
  })
  data!: StatUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  where?: StatWhereInput | undefined;
}
