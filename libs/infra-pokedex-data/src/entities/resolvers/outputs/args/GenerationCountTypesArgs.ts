import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeWhereInput } from "../../inputs/TypeWhereInput";

@TypeGraphQL.ArgsType()
export class GenerationCountTypesArgs {
  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;
}
