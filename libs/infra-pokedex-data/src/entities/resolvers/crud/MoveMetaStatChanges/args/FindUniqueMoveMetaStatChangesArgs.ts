import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaStatChangesWhereUniqueInput } from "../../../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveMetaStatChangesArgs {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaStatChangesWhereUniqueInput;
}
