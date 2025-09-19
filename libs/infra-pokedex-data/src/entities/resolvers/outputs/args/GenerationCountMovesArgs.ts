import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveWhereInput } from "../../inputs/MoveWhereInput";

@TypeGraphQL.ArgsType()
export class GenerationCountMovesArgs {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;
}
