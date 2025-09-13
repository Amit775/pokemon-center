import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachinesWhereUniqueInput } from "../../../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMachinesOrThrowArgs {
  @TypeGraphQL.Field(_type => MachinesWhereUniqueInput, {
    nullable: false
  })
  where!: MachinesWhereUniqueInput;
}
