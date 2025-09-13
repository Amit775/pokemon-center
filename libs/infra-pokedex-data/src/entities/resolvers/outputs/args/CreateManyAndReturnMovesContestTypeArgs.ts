import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypesWhereInput } from "../../inputs/ContestTypesWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMovesContestTypeArgs {
  @TypeGraphQL.Field(_type => ContestTypesWhereInput, {
    nullable: true
  })
  where?: ContestTypesWhereInput | undefined;
}
