import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureUpdateManyMutationInput } from "../../../inputs/NatureUpdateManyMutationInput";
import { NatureWhereInput } from "../../../inputs/NatureWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNatureArgs {
  @TypeGraphQL.Field(_type => NatureUpdateManyMutationInput, {
    nullable: false
  })
  data!: NatureUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => NatureWhereInput, {
    nullable: true
  })
  where?: NatureWhereInput | undefined;
}
